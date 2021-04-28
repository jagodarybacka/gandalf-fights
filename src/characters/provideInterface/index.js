const provideInterface = CharacterComponent => props => (
  <div className="Character">
    <span>HP: {props.health}</span>
    <CharacterComponent />
  </div>
);

export default provideInterface;
