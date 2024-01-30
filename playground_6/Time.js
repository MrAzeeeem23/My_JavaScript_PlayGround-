
function findPair(a, n, z)
{
	
	// Iterate through all the pairs
	for(let i = 0; i < n; i++)
		for(let j = 0; j < n; j++)
		
			if (i != j && a[i] + a[j] == z)
				return true;

	return false;
}

let a = [ 1, -2, 1, 0, 5 ];
let z = 0;
let n = a.length;

// Function Call
if (findPair(a, n, z))
	console.log('true')
else
	console.log('false')
    
