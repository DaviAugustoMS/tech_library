import "./styles.scss";
import { Button } from "../Button";

interface ILadyProps {
  handleAlphabet: () => void;
  handleColors: () => void;
  handleSizes: () => void;
  handleReset: () => void;
  active: boolean;
  activeColors: boolean;
  activeSizes: boolean;
}

const Lady = ({
  handleAlphabet,
  handleColors,
  handleSizes,
  handleReset,
  active,
  activeColors,
  activeSizes,
}: ILadyProps) => {
  return (
    <div className="lady-container">
      <div className="lady-container__box">
        <div className="lady-container__box__buttons">
          <span className="lady-container__box__buttons__text">SORT BY</span>
          <div className="lady-container__box__buttons__buttons-top">
            <Button
              type="az"
              action={active}
              onPress={() => handleAlphabet()}
            />
            <Button
              type="colors"
              action={activeColors}
              onPress={() => handleColors()}
            />
            <Button
              type="sizes"
              action={activeSizes}
              onPress={() => handleSizes()}
            />
          </div>
          <div className="lady-container__box__buttons__line"></div>
          <div className="lady-container__box__buttons__buttons-bottom">
            <button
              onClick={() => handleReset()}
              className="lady-container__box__buttons__buttons-bottom__button"
            ></button>
          </div>
        </div>
      </div>
      <div className="lady-container__lady"></div>
    </div>
  );
};

export { Lady };
