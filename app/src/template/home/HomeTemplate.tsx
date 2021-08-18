import React from 'react';
import { Button } from '../../components/buttons';

export const HomeTemplate = () => {
	return (
		<div>
			<Button text='primeiro botão' onClick={() => alert('cliquei')} />
		</div>
	);
};
