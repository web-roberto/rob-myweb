import styled from 'styled-components';

function LandingPage(props) {
 // console.warn('-----------LandingPage------props-', props);
  return (
    <>
      <LightColor>Hola Mundo</LightColor>
      <button type="button" onClick={props.toLanding}>
        Projects
      </button>
    </>
  );
}
const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;

export default LandingPage;
