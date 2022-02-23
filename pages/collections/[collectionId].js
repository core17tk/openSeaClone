import React from 'react'
import { useRouter } from 'next/router'
 
const collection = () => {

	const router = useRouter();

	return (
		<div>
		 <h2>{router.query.collectionId}</h2>
		 </div>
		)
}

export default collection;