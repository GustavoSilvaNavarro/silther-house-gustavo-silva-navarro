export const UniqueOrder = ({ orden }) => {
  return (
    <div className="mb-3">
        <div className="d-flex align-items-center">
            <img className="img-fluid rounded w-25 me-3" src={orden.url} alt={orden.name} />
            <div>
                <p className="fw-bold">{orden.name}</p>
                <p className="m-0 textoCorto">{orden.description}</p>
                <div className="d-flex align-items-center">
                    <p className="m-0 me-3"><span className="fw-bold">Cantidad:</span> {orden.amount}</p>
                    <p className="m-0"><span className="fw-bold">Precio x Unidad:</span> USD {orden.price}</p>
                </div>
            </div>
        </div>
    </div>
  )
};