function ResumoCompra({ total }) {
  return (
    <div>
      <h2>Total: R$ {total.toFixed(2)}</h2>
    </div>
  );
}

export default ResumoCompra;