const express = require('express');
const { pool } = require('../config/database');
const router = express.Router();

// GET all elements
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT 
        id,
        symbol,
        subtitle,
        \`group\` as element_group,
        \`desc\` as description,
        link,
        position_index,
        costcodes,
        vendor,
        created_at,
        updated_at
      FROM elements 
      ORDER BY position_index ASC
    `);
    
    // Transform the data to match frontend expectations
    const elements = rows.map(row => ({
      id: row.id,
      symbol: row.symbol,
      subtitle: row.subtitle,
      group: row.element_group,
      desc: row.description,
      link: row.link,
      position_index: row.position_index,
      costcodes: row.costcodes || '',
      vendor: row.vendor,
      created_at: row.created_at,
      updated_at: row.updated_at
    }));
    
    res.json({
      success: true,
      count: elements.length,
      data: elements
    });
  } catch (error) {
    console.error('Error fetching elements:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch elements',
      error: error.message
    });
  }
});

// GET element by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.execute(`
      SELECT 
        id,
        symbol,
        subtitle,
        \`group\` as element_group,
        \`desc\` as description,
        link,
        position_index,
        costcodes,
        vendor,
        created_at,
        updated_at
      FROM elements 
      WHERE id = ?
    `, [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Element not found'
      });
    }
    
    const element = {
      id: rows[0].id,
      symbol: rows[0].symbol,
      subtitle: rows[0].subtitle,
      group: rows[0].element_group,
      desc: rows[0].description,
      link: rows[0].link,
      position_index: rows[0].position_index,
      costcodes: rows[0].costcodes || '',
      vendor: rows[0].vendor,
      created_at: rows[0].created_at,
      updated_at: rows[0].updated_at
    };
    
    res.json({
      success: true,
      data: element
    });
  } catch (error) {
    console.error('Error fetching element:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch element',
      error: error.message
    });
  }
});

// GET elements by group
router.get('/group/:groupName', async (req, res) => {
  try {
    const { groupName } = req.params;
    const [rows] = await pool.execute(`
      SELECT 
        id,
        symbol,
        subtitle,
        \`group\` as element_group,
        \`desc\` as description,
        link,
        position_index,
        costcodes,
        vendor,
        created_at,
        updated_at
      FROM elements 
      WHERE \`group\` = ?
      ORDER BY position_index ASC
    `, [groupName]);
    
    const elements = rows.map(row => ({
      id: row.id,
      symbol: row.symbol,
      subtitle: row.subtitle,
      group: row.element_group,
      desc: row.description,
      link: row.link,
      position_index: row.position_index,
      costcodes: row.costcodes || '',
      vendor: row.vendor,
      created_at: row.created_at,
      updated_at: row.updated_at
    }));
    
    res.json({
      success: true,
      group: groupName,
      count: elements.length,
      data: elements
    });
  } catch (error) {
    console.error('Error fetching elements by group:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch elements by group',
      error: error.message
    });
  }
});

module.exports = router;
