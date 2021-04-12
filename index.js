let var = []









function theBeatlesPlay( musicians, instruments ) {
let arr = [ ];
} for ( let i=0; i < musicians.length; i++ ) {
  const str = musicians[ i ] + ' plays ' + instruments[ i ];
  arr.push( str );
  return arr;
}

const whoPlaysWhat = theBeatlesPlay(
  [ 'John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr' ],
  [ 'Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums' ]
);

console.log( whoPlaysWhat );