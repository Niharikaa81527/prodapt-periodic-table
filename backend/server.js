const express = require('express');
const cors = require('cors');
const { testConnection } = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const elementsRouter = require('./routes/elements');
const groupsRouter = require('./routes/groups');

// Use routes
app.use('/api/elements', elementsRouter);
app.use('/api/groups', groupsRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Periodic Table API is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Periodic Table Tools Landscape API',
    version: '1.0.0',
    endpoints: {
      elements: '/api/elements',
      groups: '/api/groups',
      health: '/api/health'
    }
  });
});

// Start server
async function startServer() {
  try {
    // Test database connection first
    const dbConnected = await testConnection();
    
    if (!dbConnected) {
      console.log('⚠️  Starting server without database connection...');
    }
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📊 API endpoints:`);
      console.log(`   - Elements: http://localhost:${PORT}/api/elements`);
      console.log(`   - Groups: http://localhost:${PORT}/api/groups`);
      console.log(`   - Health: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
