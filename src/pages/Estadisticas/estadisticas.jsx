import './styles/estadisticas.css';

const Estadisticas = () => {
  return (
    <div className='container-fluid flex-grow-1'>
      <div className='row justify-content-center h-100 position-relative overflow-hidden'>
        <div className='col-6 position-absolute bg-green transform-div'></div>
        <div className='col-5 d-flex flex-column  pt-4 ps-5'>
          <img
            src='/dist/img/Landing Page.png'
            alt=''
            height='150px'
            width='150px'
            className='rounded-circle border mt-4 ms-3'
          />
          <p className='fs-1 color-gray mb-0'>Barcelona</p>
        </div>
        <div className='col-5 pt-4 ps-0 pe-0 '>
          <div className='mb-0 mt-5 texto-color py-1 text-white px-1 fs-3'>
            <p className=''>Datos Estadísticos</p>
          </div>
          <div className='table-responsive'>
            <table className='table table-bordered shadow'>
              <tr className='bg-white'>
                <td className='text-nowrap'>Equipo</td>
                <td className='text-nowrap'>Goles a Favor</td>
                <td className='text-nowrap'>Goles a Favor</td>
                <td className='text-nowrap'>Fanaticos</td>
              </tr>
              <tr className='bg-white'>
                <td className='text-nowrap'>Equipo</td>
                <td className='text-nowrap'>Goles a Favor</td>
                <td className='text-nowrap'>Goles a Favor</td>
                <td className='text-nowrap'>Fanaticos</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
