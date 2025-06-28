const inputData = $input.first().json.output;

// Split the entire string by the delimiter "---"
const pieces = inputData.split('---\n\n');

// Initialize an array to hold the separated content objects
const outputArray = [];

// Loop through the split pieces
for (let i = 0; i < pieces.length; i++) {
  const piece = pieces[i].trim(); // Trim whitespace from the piece

  if (piece) { // Ensure the piece is not empty
    const lines = piece.split('\n');
    let contentPieceTitle = '';
    let contentBody = '';

    if (lines.length > 0) {
      const headerLine = lines[0].trim();
      if (headerLine.startsWith('**Content Piece')) {
        contentPieceTitle = headerLine.replace(/\*\*/g, ''); // Remove bold markdown
        contentBody = lines.slice(1).join('\n').trim(); // Join the rest of the lines as body
      } else {
        contentBody = piece; // Fallback: treat the entire piece as body if no clear header
      }
    }

    outputArray.push({
      title: contentPieceTitle,
      content: contentBody
    });
  }
}

// Filter out any entries where the title doesn't match the expected "Content Piece X:" format
const finalOutput = outputArray.filter(item => item.title.startsWith('Content Piece'));

// Corrected line: Wrap the array within an object under a key (e.g., 'data')
return [{ json: { data: finalOutput } }];