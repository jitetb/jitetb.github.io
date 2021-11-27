import React from 'react';
import { Container } from 'react-bootstrap'
export default function MainContent({ content }) {
	return (
		<Container fluid className="mx-0 p-0">
			{
				React.createElement(content, null)
			}
		</Container>
	)
}
