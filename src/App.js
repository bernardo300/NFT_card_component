import {Container, Card, Footer} from 'src/components';
import avatar from 'src/img/image-avatar.png';
function App() {
  const data = {
    title:'Equilibrium #3429',
    frase: 'Our Equilibrium collection promotes balance and calm.',
    author: 'Bernardo Lopes',
    avatar: avatar,
  }
  return (
    <Container>
      <Card 
      {...data}
      />
      <Footer author={data.author} />
    </Container>
    
  );
}

export default App;
