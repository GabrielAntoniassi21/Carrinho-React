function ResumoCompra({ total }) {
  return (
    <section className="resumo-compra">
      <h2>Total: R$ {total.toFixed(2)}</h2>
    </section>
  );
}

export default ResumoCompra;