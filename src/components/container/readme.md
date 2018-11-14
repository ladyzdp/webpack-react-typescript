### Examples

**Standard Use**

Used to contain site content within a centered and minimum width container

```jsx
<Container>
  <div>Standard Use</div>
</Container>
```

**Width**

Alter the minimum width of the container

```jsx
<Container width={10} styles={{ backgroundColor: '#eee' }}>
 <div>Standard Use</div>
</Container>
```

**Shadow**

Apply one of the theme's shadows to the container

```jsx
<Container shadow='light'>
  <div>Standard Use</div>
</Container>
```

**Custom Styles**

Apply a custom styles object to alter the look. Available elements are:

- `root`: Root content element
- `outer`: Wrapper element

```jsx
<Container styles={{
  root: {
    backgroundColor: 'whitesmoke',
    maxWidth: '15rem',
    padding: '0.75rem',
    textAlign: 'center'
  },
  outer: {
    padding: '0.75rem',
    backgroundColor: 'grey'
  }
}}>
  <span>Hello!</span>
</Container>
```
