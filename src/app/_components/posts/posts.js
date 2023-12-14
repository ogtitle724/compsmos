import "./style.css";

function Posts(props) {
  return (
    <>
      <h3 className="p-posts__title">{props.title}</h3>
      <ul className="p-posts">
        <li className="p-posts__item">
          <a>
            <span className="tm p_posts__ctg">{"improvement ▸ js"}</span>
            <span className="ht p_posts__item-title">
              title here so all the people can read
            </span>
          </a>
        </li>
        <li className="p-posts__item">
          <a>
            <span className="tm p_posts__ctg">{"improvement ▸ js"}</span>
            <span className="ht p_posts__item-title">
              title here so all the people can read
            </span>
          </a>
        </li>
        <li className="p-posts__item">
          <a>
            <span className="tm p_posts__ctg">{"improvement ▸ js"}</span>
            <span className="ht p_posts__item-title">
              title here so all the people can read
            </span>
          </a>
        </li>
        <li className="p-posts__item">
          <a>
            <span className="tm p_posts__ctg">{"improvement ▸ js"}</span>
            <span className="ht p_posts__item-title">
              title here so all the people can read
            </span>
          </a>
        </li>
        <li className="p-posts__item">
          <a>
            <span className="tm p_posts__ctg">{"improvement ▸ js"}</span>
            <span className="ht p_posts__item-title">
              title here so all the people can read
            </span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Posts;
