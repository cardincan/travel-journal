import Location from './../assets/location.svg'

export default function Card(props) {
  const dateFrom = new Date(props.dateFrom)
    .toLocaleDateString('ru')
    .split('.')
    .reverse()
    .join('-')
  const dateTo = new Date(props.dateTo)
    .toLocaleDateString('ru')
    .split('.')
    .reverse()
    .join('-')

  return (
    <article className="card">
      <img className="card__image" src={props.image} width="250" height="340" />
      <div className="card-info">
        <div className="card-info-location">
          <img
            className="card-info-location__gps-image"
            src={Location}
            width="15"
          />
          <span className="card-info-location__country">{props.country}</span>
          <a
            className="card-info-location__link"
            target="_blank"
            href={props.mapLink}
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="card__title">{props.title}</h2>
        <span className="card-info__trip-dates">
          <time dateTime={dateFrom}>{props.dateFrom}</time> -{' '}
          <time dateTime={dateTo}>{props.dateTo}</time>
        </span>
        <p className="card-info__description">{props.description}</p>
      </div>
    </article>
  )
}
