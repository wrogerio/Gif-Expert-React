import "./index.css";

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="card animate__animated animate__swing animate-delay">
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    );
};
