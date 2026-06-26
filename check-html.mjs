import http from 'http';

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const bodyMatch = data.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) {
      console.log('No body found');
      return;
    }
    
    // Remove all <script>...</script> tags to just look at real DOM text
    let bodyOnly = bodyMatch[1].replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    const target = '$29';
    const index = bodyOnly.indexOf(target);
    
    if (index !== -1) {
      console.log('FOUND:', target);
      const start = Math.max(0, index - 100);
      const end = Math.min(bodyOnly.length, index + 100);
      console.log('CONTEXT:', bodyOnly.substring(start, end));
    } else {
      console.log('NOT FOUND in pure HTML body.');
    }
    process.exit(0);
  });
}).on('error', err => {
  console.log('Error:', err.message);
  process.exit(1);
});
