const path = require('path');

// Simple script to help generate PWA icons
// This is a template - you'll need to use an online SVG to PNG converter
// or install additional packages like 'sharp' for automatic conversion

console.log('📱 PWA Icon Generator Helper');
console.log('=============================');
console.log('');
console.log('Your SVG icon is located at: src/app/icon.svg');
console.log('');
console.log('To generate the required PNG icons, you can:');
console.log('');
console.log('1. Use an online converter like:');
console.log('   - https://svgtopng.com/');
console.log('   - https://convertio.co/svg-png/');
console.log('');
console.log('2. Convert your SVG to these sizes:');
console.log('   - 192x192 pixels → save as public/icon-192x192.png');
console.log('   - 512x512 pixels → save as public/icon-512x512.png');
console.log('');
console.log('3. Or install sharp for automatic conversion:');
console.log('   npm install sharp');
console.log('');

// Check if sharp is available for automatic conversion
try {
  const sharp = require('sharp');
  console.log('✅ Sharp is available! Generating PNG icons...');
  
  const svgPath = path.join(__dirname, '../src/app/icon.svg');
  const publicPath = path.join(__dirname, '../public');
  
  // Generate 192x192
  sharp(svgPath)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicPath, 'icon-192x192.png'))
    .then(() => console.log('✅ Generated icon-192x192.png'))
    .catch((err) => console.log('❌ Error generating 192x192:', err.message));
  
  // Generate 512x512
  sharp(svgPath)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicPath, 'icon-512x512.png'))
    .then(() => console.log('✅ Generated icon-512x512.png'))
    .catch((err) => console.log('❌ Error generating 512x512:', err.message));
    
} catch {
  console.log('ℹ️  Sharp not installed. Install with: npm install sharp');
  console.log('   Then run this script again for automatic conversion.');
}
