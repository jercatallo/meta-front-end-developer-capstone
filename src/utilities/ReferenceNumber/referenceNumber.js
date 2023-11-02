export function generateReferenceNumber(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let referenceNumber = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      referenceNumber += characters.charAt(randomIndex);
    }
  
    return referenceNumber;
  }
  