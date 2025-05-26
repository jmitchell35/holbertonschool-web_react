/* Brand Properties:

_brand: 'major' and _brand: 'minor' are brand properties
They make the interfaces nominally different (not just structurally)
TypeScript will treat them as distinct types even though they have the same structure

 Type Safety:

You cannot accidentally pass MinorCredits to sumMajorCredits
You cannot accidentally pass MajorCredits to sumMinorCredits
The brand property ensures type safety at compile time
*/

// Branded interface for MajorCredits
interface MajorCredits {
  credits: number;
  _brand: 'major';  // Brand property to uniquely identify
}

// Branded interface for MinorCredits
interface MinorCredits {
  credits: number;
  _brand: 'minor';  // Brand property to uniquely identify
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major'
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'minor'
  };
}

// Example usage:
const majorSubject1: MajorCredits = { credits: 3, _brand: 'major' };
const majorSubject2: MajorCredits = { credits: 4, _brand: 'major' };

const minorSubject1: MinorCredits = { credits: 1, _brand: 'minor' };
const minorSubject2: MinorCredits = { credits: 2, _brand: 'minor' };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log('Total Major Credits:', totalMajorCredits.credits); // 7
console.log('Total Minor Credits:', totalMinorCredits.credits); // 3
