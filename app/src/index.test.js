import ReactDOM from 'react-dom';

describe('Index', () => {
  let div;

  beforeAll(() => {
    div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.append(div);
  });

  it('mounts without crashing', async () => {
    await import('./App/index');
  });

  it('unmounts without crashing', () => {
    ReactDOM.unmountComponentAtNode(div);
  });
});
