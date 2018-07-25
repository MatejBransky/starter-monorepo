import React from 'react';
import { render } from 'react-testing-library';

import Foo from '../packages/foo/src';

it('should not work', () => {
  render(<Foo>Strong</Foo>);
});

it('should be in the document', () => {
  const { queryByLabelText } = render(
    <form>
      <label>
        Foo
        <input type="text" />
      </label>
    </form>
  );

  expect(queryByLabelText('Foo')).toBeInTheDocument();
});
