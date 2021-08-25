import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';

import { ImmobileContextState, ImmobileContext,  } from '../../store/immobile/ImmobileContext';
import {  initialImmobileContext } from '../../store/immobile/InitialImmobileContext';

export default function RenderRuleTemplate(
	component: ReactElement,
  immobileContextState?: ImmobileContextState
): unknown {
  const contextValue = {
		immobileContextState:  immobileContextState || initialImmobileContext,
		immobileContextDispatch: jest.fn()
	};

	const Wrapper = (): ReactElement => (
		<ImmobileContext.Provider value={contextValue}>{component}</ImmobileContext.Provider>
	);
	return {
		...render(
			<Wrapper />
		)
	};
}
