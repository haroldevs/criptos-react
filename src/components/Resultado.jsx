import styled from "styled-components";

const Resultados = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Texto = styled.p``;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Resultados>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Imagen cripto"
      />
      <div>
        <Precio>
          El Precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El Precio más alto del día de: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El Precio más bajo del día de: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última Actulización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Resultados>
  );
};

export default Resultado;
