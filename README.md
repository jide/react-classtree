## Class tree

### Description
A decorator to create CSS class names tree, like a simple BEM, for React.

### Demo
`npm start dev` then visit http://127.0.0.1:3000

### Usage
```js
import classTree from 'react-classtree';

@classTree
class App extends React.Component {
  render() {
    return (
      <div classTree='Demo'>
        <div classTree='main'>
          <div classTree='title'>
            Hello !
          </div>
        </div>
        <div classTree='aside'>
          Aside
        </div>
      </div>
    );
  }
}
```

### Yields
```html
<div class='Demo'>
  <div class='Demo__main'>
    <div class='Demo__main__title'>
      Hello !
    </div>
  </div>
  <div class='Demo__aside'>
    Aside
  </div>
</div>
```

### Customize
Use the factory to customize :
```js
import { factory } from 'react-classtree';
const myDecorator = factory({ separator: '--', propsName: 'cx' });
```
