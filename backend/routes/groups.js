const express = require('express');
const { pool } = require('../config/database');
const router = express.Router();

// GET all groups
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT 
        id,
        \`group\` as group_name,
        label,
        color,
        created_at,
        updated_at
      FROM groups 
      ORDER BY id ASC
    `);
    
    // Transform the data to match frontend expectations
    const groups = rows.map(row => ({
      id: row.id,
      group: row.group_name,
      label: row.label,
      color: row.color,
      created_at: row.created_at,
      updated_at: row.updated_at
    }));
    
    res.json({
      success: true,
      count: groups.length,
      data: groups
    });
  } catch (error) {
    console.error('Error fetching groups:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch groups',
      error: error.message
    });
  }
});

// GET group by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.execute(`
      SELECT 
        id,
        \`group\` as group_name,
        label,
        color,
        created_at,
        updated_at
      FROM groups 
      WHERE id = ?
    `, [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Group not found'
      });
    }
    
    const group = {
      id: rows[0].id,
      group: rows[0].group_name,
      label: rows[0].label,
      color: rows[0].color,
      created_at: rows[0].created_at,
      updated_at: rows[0].updated_at
    };
    
    res.json({
      success: true,
      data: group
    });
  } catch (error) {
    console.error('Error fetching group:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch group',
      error: error.message
    });
  }
});

module.exports = router;
