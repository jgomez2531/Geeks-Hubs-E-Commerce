import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <Container className="small-container">
      <Helmet>
        <title>Inciar sesión</title>
      </Helmet>
      <h1 className="my-3">Inciar sesión</h1>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Iniciar</Button>
        </div>
        <div className="mb-3">
          ¿Usuario nuevo?{' '}
          <Link to={`/signup?redirect=${redirect}`}>
            Regístrate a través del siguiente enlance
          </Link>
        </div>
      </Form>
    </Container>
  );
}
