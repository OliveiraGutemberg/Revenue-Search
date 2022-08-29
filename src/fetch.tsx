import React, { useState } from 'react';

export function fetchApi2() {
    const [array, setArray] = useState<[]>([]);

    const response = fetch('https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json')
    .then(data => data.json())
    .then(res => setArray(res))
    return array
}


//return asyncfetchApi

