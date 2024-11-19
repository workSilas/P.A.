import './index.scss';


export default function Nav() {
  return (
    <div className="Nav">
      <div className="separacaoDeComponentes">
        <img src="/assets/images/Vespa.png" alt="cineVespa" />
      </div>
      <div className="separacaoDeComponentes">
        <h1>TÍTULO</h1>
      </div>
      <div className="separacaoDeComponentes">
        <input placeholder='Procure' type="search" />
      </div>
    </div>
  );
}
