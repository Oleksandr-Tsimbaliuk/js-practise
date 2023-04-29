import data from "./data.json";

export const Cards = () => {
  return (
    <div className="container">
      {data.map((card) => {
        return (
          <div className="card" key={card.id}>
            <img src={card.url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, sed quae? Rem debitis molestiae ullam doloribus, quae
                iste laboriosam illum numquam iure, voluptatum ducimus voluptate
                iusto doloremque necessitatibus velit commodi.
              </p>
              <a href="asd" class="btn btn-primary">
                Go to ...
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
