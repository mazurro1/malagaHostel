import React, { useState } from "react"
import styled from "styled-components"
import { Colors } from "../common"
import { CSSTransition } from "react-transition-group"

const CookiesDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2000;

  .container {
    position: relative;
  }

  .cookieWindow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  .cookieContent {
    position: relative;
    background-color: white;
    min-height: 200px;
    width: 100%;
    padding: 10px 20px;
    border-radius: 10px;
    padding-bottom: 60px;
  }

  .buttonPosition {
    position: absolute;
    bottom: 10px;
    right: 10px;
    button {
      background-color: ${Colors.second};
      color: white;
      border: none;
      border-radius: 5px;
      padding: 5px 40px;
      transition-property: background-color;
      transition-duration: 0.3s;
      transition-timing-function: ease;

      &:hover {
        background-color: ${Colors.secondDark};
      }
    }
  }
`

const ContentTextCookies = styled.div`
  max-height: 50vh;
  overflow-y: scroll;
  font-size: 0.8rem;
  h4 {
    margin-bottom: 2px;
  }
`

const Cookie = () => {
  const [acceptCookie, setAcceptCookie] = useState(true)
  return (
    <CSSTransition
      in={acceptCookie}
      timeout={300}
      classNames="alert"
      unmountOnExit
    >
      <CookiesDiv>
        <div className="cookieWindow">
          <div className="container">
            <div className="cookieContent">
              <h1 className="text-center">Cookies</h1>
              <ContentTextCookies>
                <h4>AVISO LEGAL Y CONDICIONES DE USO</h4>
                <p>
                  En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de
                  julio, de Servicios de la Sociedad de la Información y del
                  Comercio Electrónico (LSSICE), Jolanta Beata Juchtman (en
                  adelante, “Hostal Cafetería La Estación”), Responsable de esta
                  web, pone a disposición de los Usuarios la presente
                  información,para definirsus Condiciones de Uso. Adicionalmente
                  a los contenidos aquí expuestos, los aspectos específicos
                  relacionados con la protección de los datos personales y la
                  privacidad de los usuarios de esta web se desarrollan en las
                  páginas de Política de Privacidad y Política de Cookies.
                </p>
                <h4>IDENTIDAD DEL RESPONSABLE DEL TRATAMIENTO</h4>
                <ul>
                  <li>Nombre Comercial: Hostal Cafetería La Estación</li>
                  <li>
                    Domicilio Social:CTRA. Málaga – Almería, 152, 29790,
                    Benajarafe, Málaga
                  </li>
                  <li>Actividad:Hostelería</li>
                  <li>Teléfono: 952514565</li>
                  <li>eMail: reservas@hostalestacion.es</li>
                  <li>Formulario de contacto:http://www.hostalestacion.es/</li>
                  <li>Nombre de Dominio:http://www.hostalestacion.es/</li>
                  <li>
                    Registro de Tratamientos conforme al RGPD:
                    Clientes/Proveedores, Videovigilancia, Empleados, Selección
                    de Personal y Usuarios Web.
                  </li>
                </ul>
                <h4>FINALIDAD DE LA WEB</h4>
                <p>
                  La web de Hostal Cafetería La Estación tiene la finalidad de
                  informar a clientes y potenciales clientes de sus productos
                  y/o servicios, datos de contacto, ubicación, etc. Además, en
                  su caso, también tendrá la finalidad de divulgar información
                  relacionada con el sector de actividad del Responsable.
                </p>
                <h4>MARCO NORMATIVO</h4>
                <p>
                  La actividad de esta web se encuentra sujeta al marco legal
                  español y europeo, concretamente a las siguientes normas:
                </p>
                <ul>
                  <li>
                    Reglamento General de Protección de Datos (RGPD) (UE)
                    2016/679, que regula el tratamiento de datos personales en
                    los países de la Unión Europea.
                  </li>
                  <li>
                    Ley Orgánica 3/2018, de 5 de diciembre, sobre protección de
                    datos y derechos digitales (LOPD y GDD), normas de ámbito
                    regional (aplicables a España), y que definen y amplían
                    muchos de los conceptos y derechos presentes en el RGPD.
                  </li>
                  <li>
                    Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
                    la Información y del Comercio Electrónico (LSSICE),norma que
                    afecta a aquellas webs que, de alguna forma, realicen
                    actividades económicas mediante medios electrónicos, como es
                    el caso de esta web.
                  </li>
                </ul>
                <h4>CONDICIONES DE USO Y RESPONSABILIDADES</h4>
                <p>
                  Toda persona que acceda a este sitio web asume el papel de
                  Usuario, comprometiéndose a la observancia y cumplimiento
                  riguroso de las condiciones aquí dispuestas, así como a
                  cualesquiera otra disposición legal que fuera de aplicación.
                  “Hostal Cafetería La Estación” no se hará responsable de los
                  daños y perjuicios, propios o a terceros, producidos por el
                  uso de este sitio web por parte del Usuario.
                </p>
                <p>
                  “Hostal Cafetería La Estación” proporciona el acceso a
                  artículos, informaciones, servicios y datos de su propiedad o
                  de terceros, elaborados con fines meramente informativos o
                  divulgativos, que pueden no reflejar el estado actual de la
                  legislación o la jurisprudencia, y que se refieren a
                  situaciones generales, por lo que su contenido no debe ser
                  aplicado necesariamente por el Usuario a casos concretos. El
                  contenido de esta web, por tanto, no puede ser considerado, en
                  ningún caso, sustitutivo de asesoramiento legal.
                </p>
                <p>
                  “Hostal Cafetería La Estación” se reserva el derecho a
                  modificar cualquier tipo de información que pudiera aparecer
                  en la web, en cualquier momento y sin previo aviso, sin que
                  exista obligación de preavisar o poner en conocimiento de los
                  Usuarios dichas obligaciones, entendiéndose como suficiente la
                  publicación en el presente sitio web.
                </p>
                <p>
                  Este sitio web ha sido revisado y probado para que funcione
                  correctamente de manera ininterrumpida. No obstante, “Hostal
                  Cafetería La Estación” no descarta la posibilidad de que
                  existan ciertos errores de programación, falta de
                  disponibilidad puntual (por ejemplo, caídas del servidor, o
                  mantenimiento del mismo) o que acontezcan causas de fuerza
                  mayor, catástrofes naturales, huelgas, o circunstancias
                  semejantes que hagan imposible el acceso temporal a la página
                  web. De igual forma, “Hostal Cafetería La Estación” no puede
                  garantizar el funcionamiento ininterrumpido o totalmente libre
                  de errores de esta web, ni se responsabiliza de los virus que
                  tengan su origen en una transmisión telemática infiltrados por
                  terceros generados con la finalidad de obtener resultados
                  negativos para un sistema informático.
                </p>
                <p>
                  El Usuario se compromete a no utilizar esta web ni, si es el
                  caso, los servicios o productos ofrecidos en la misma, para la
                  realización de actividades contrarias a la ley, al orden
                  público o a estas condiciones de uso. Por tanto, “Hostal
                  Cafetería La Estación” no se hace responsable de la
                  información y contenidos almacenados, a título enunciativo
                  pero no limitativo, en foros, chat´s, generadores de blogs,
                  comentarios, redes sociales o cualesquiera otro medio que
                  permita a terceros publicar contenidos. No obstante, y en
                  cumplimiento de lo dispuesto en el art. 11 y 16 de la LSSI-CE,
                  “Hostal Cafetería La Estación” se pone a disposición de todos
                  los Usuarios, autoridades y fuerzas de seguridad, y
                  colaborando de forma activa en la retirada o en su caso
                  bloqueo de todos aquellos contenidos que pudieran afectar o
                  contravenir la legislación nacional, o internacional, derechos
                  de terceros, o la moral y el orden público. En caso de que un
                  Usuario considere que existe en la web algún contenido que
                  pudiera ser susceptible de esta clasificación, se ruega lo
                  notifique de forma inmediata a nuestro personal.
                </p>
                <p>
                  “Hostal Cafetería La Estación” se reserva el derecho a denegar
                  o retirar el acceso a la web sin necesidad de advertencia
                  previa, a instancia propia o de un tercero, a aquellos
                  Usuarios que incumplan nuestras Condiciones de Uso.
                </p>
                <h4>PROPIEDAD INTELECTUAL</h4>
                <p>
                  El sitio web, incluyendo a título enunciativo pero no
                  limitativo su programación, edición, compilación y demás
                  elementos necesarios para su funcionamiento, los diseños,
                  logotipos, texto y/o gráficos son propiedad de “Hostal
                  Cafetería La Estación” o, en su caso, dispone de licencia o
                  autorización expresa por parte de los autores.
                </p>
                <p>
                  Todos los contenidos del sitio web se encuentran debidamente
                  protegidos por la normativa de propiedad intelectual e
                  industrial (artículos 8 y 32.1, párrafo segundo, de la Ley de
                  Propiedad Intelectual), así como inscritos en los registros
                  públicos correspondientes, y no se permite la reproducción y/o
                  publicación, total o parcial, del sitio web, ni su tratamiento
                  informático, su distribución, difusión, modificación o
                  transformación, sin el permiso previo y por escrito del mismo.
                  “Hostal Cafetería La Estación” velará por el cumplimiento de
                  las anteriores condiciones, así como por la debida utilización
                  de los contenidos presentados en sus páginas web, ejercitando
                  todas las acciones civiles y penales que le correspondan en el
                  caso de infracción o incumplimiento de estos derechos por
                  parte del Usuario.
                </p>
                <p>
                  Los diseños, logotipos, texto y/o gráficos ajenos a “Hostal
                  Cafetería La Estación” y que pudieran aparecer en el sitio
                  web, pertenecen a sus respectivos propietarios, siendo ellos
                  mismos responsables de cualquier posible controversia que
                  pudiera suscitarse respecto a los mismos. En todo caso,
                  “Hostal Cafetería La Estación” cuenta con la autorización
                  expresa y previa por parte de los mismos. “Hostal Cafetería La
                  Estación” reconoce a favor de sus titulares los
                  correspondientes derechos de propiedad industrial e
                  intelectual, no implicando su sola mención o aparición en el
                  sitio web la existencia de derechos o responsabilidad alguna
                  del Responsable sobre los mismos, como tampoco respaldo,
                  patrocinio o recomendación por parte del mismo.
                </p>
                <h4>ENLACES DE TERCEROS</h4>
                <p>
                  “Hostal Cafetería La Estación” puede poner a disposición del
                  Usuario enlaces u otros elementos que permiten el acceso hacia
                  otros sitios web pertenecientes a terceros. No comercializamos
                  los productos y/o servicios de dichas páginas enlazadas, ni
                  asumimos ningún tipo de responsabilidad sobre las mismas, ni
                  sobre la información contenida en ellas, ni su veracidad o
                  licitud, ni de cualesquiera efectos que pudieran derivarse.
                </p>
                <p>
                  En todo caso, “Hostal Cafetería La Estación” manifiesta que
                  procederá a la retirada inmediata de cualquier contenido que
                  pudiera contravenir la legislación nacional o internacional,
                  la moral o el orden público, procediendo a la retirada
                  inmediata de la redirección a dicho sitio web, poniendo en
                  conocimiento de las autoridades competentes el contenido en
                  cuestión.
                </p>
                <h4>LEY APLICABLE Y JURISDICCIÓN</h4>
                <p>
                  La relación entre Responsable y Usuario se rige en todos y
                  cada uno de sus extremos por la ley española, a la que se
                  someten expresamente ambas partes. El idioma de redacción e
                  interpretación de este aviso legal es el español.Para la
                  resolución de todas las controversias o cuestiones
                  relacionadas con el presente sitio web o de las actividades en
                  él desarrolladas, “Hostal Cafetería La Estación” y Usuario
                  acuerdan someterse a los Juzgados y Tribunales del domicilio
                  del Usuario.
                </p>
                <h4>POLÍTICA DE PRIVACIDAD</h4>
                <p>
                  “Hostal Cafetería La Estación” se encuentra profundamente
                  comprometido con el cumplimiento de la normativa española y
                  europea de protección de datos de carácter personal, y
                  garantiza el cumplimiento íntegro de las obligaciones
                  dispuestas, así como la implementación de las medidas de
                  seguridad dispuestas en el Reglamento General de Protección de
                  Datos (RGPD) (UE) 2016/679 y en Ley Orgánica 3/2018, de 5 de
                  diciembre, sobre protección de datos y derechos digitales
                  (LOPD y GDD, en adelante LOPD).
                </p>
                <p>
                  De conformidad con estas normativas, informamos que la
                  utilización de nuestra web puede requerir que se faciliten
                  ciertos datos personales a través de formularios decontacto, o
                  mediante el envío de emails, y que éstos serán objeto de
                  tratamiento por “Hostal Cafetería La Estación”, Responsable
                  del tratamiento, cuyos datos son:
                </p>
                <ul>
                  <li>NIF:X6390631N</li>
                  <li>
                    Domicilio Social: CTRA. Málaga - Almería, 152, 29790,
                    Benajarafe, Málaga
                  </li>
                  <li>Teléfono: 952514565</li>
                  <li>eMail: reservas@hostaestacion.es</li>
                </ul>
                <h4>OBTENCIÓN Y TRATAMIENTO DE DATOS PERSONALES</h4>
                <p>
                  Un dato personal es cualquier información relativa a una
                  persona: nombre, email, domicilio, teléfono, NIF/NIE...
                  Adicionalmente, cuando un Usuario visita nuestro sitio web,
                  determinada información se almacena automáticamente por
                  motivos técnicos, como la dirección IP asignada por su
                  proveedor de acceso a Internet.
                </p>
                <p>
                  “Hostal Cafetería La Estación”, como Responsable del
                  Tratamiento, tiene el deber de informar a los Usuarios de su
                  sitio web acerca de la recogida de datos de carácter personal
                  que pueden llevarse a cabo, bien sea mediante el envío de
                  correo electrónico o al cumplimentar los formularios incluidos
                  en el sitio web.
                </p>
                <p>
                  Se obtendrán únicamente los datos precisos para poder realizar
                  el servicio contratado, o para poder responder adecuadamente a
                  la petición de información realizada por el Usuario. Los datos
                  recabados son identificativos y corresponden a un mínimo
                  razonable para poder llevar a término la actividad realizada.
                  En particular, no se recogen datos especialmente protegidos en
                  ningún momento. En ningún caso se realizará un uso diferente
                  de los datos, que la finalidad para los que han sido
                  recabados.
                </p>
                <p>Formularios de contacto/email</p>
                <p>
                  Finalidad: Dar contestación a su solicitud de información
                  realizada a través de nuestro/s formulario/s de contacto.
                </p>
                <p>
                  Legitimación: La base jurídica que legitima este tratamiento
                  es el consentimiento del Usuario, que podrá revocar en
                  cualquier momento.
                </p>
                <p>
                  Cesión de datos: Los datos personales serán tratados a través
                  de servidores gestionados por Strato, que tendrá la
                  consideración de Encargado del Tratamiento.
                </p>
                <h4>MENORES DE EDAD</h4>
                <p>
                  Solo podrán usar este sitio web las personas mayores de 14
                  años. Según obliga la LOPD y GDD, en caso de menores de 14
                  años, será condición obligatoria el consentimiento de sus
                  padres o tutores para que podamos tratar sus datos personales.{" "}
                </p>
                <h4>MEDIDAS DE SEGURIDAD</h4>
                <p>
                  Se informa a los Usuarios delaweb de “Hostal Cafetería La
                  Estación” de que se han adoptado las medidas de seguridad
                  técnicas, organizativas y de seguridad a nuestro alcance para
                  evitar la pérdida, mal uso, alteración, acceso no autorizado y
                  robo de los datos, y que garantizan así la confidencialidad,
                  integridad y calidad de la información contenida en las
                  mismas, de acuerdo con lo establecido en la normativa vigente
                  en materia de protección de datos. Los datos personales que se
                  recogen en los formularios son objeto de tratamiento,
                  únicamente, por parte del personal de “Hostal Cafetería La
                  Estación” o de los Encargados del Tratamiento designados.
                </p>
                <h4>VERACIDAD DE LOS DATOS</h4>
                <p>
                  El Usuario manifiesta que todos los datos facilitados por él
                  son ciertos y correctos y se compromete a mantenerlos
                  actualizados. El Usuario responderá de la veracidad de sus
                  datos y será el único responsable de cuantos conflictos o
                  litigios pudieran resultar por la falsedad de los mismos. Es
                  importante que, para que podamos mantener los datos personales
                  actualizados, el Usuario informe a “Hostal Cafetería La
                  Estación” siempre que haya habido alguna modificación en los
                  mismos.{" "}
                </p>
                <h4>CESIÓN DE DATOS</h4>
                <p>
                  “Hostal Cafetería La Estación” no cederá ni comunicará a
                  ningún tercero tus datos, excepto en los casos legalmente
                  previstos o cuando la prestación de un servicio implique la
                  necesidad de una relación contractual con un Encargado de
                  Tratamiento. Así, el Usuario acepta que algunos de los datos
                  personales recabados sean facilitados a estos Encargados del
                  Tratamiento (plataformas de pago, gestoría, intermediarios,
                  etc.), cuando sea necesario para la efectiva realización de un
                  servicio contratado o producto adquirido. El Usuario acepta
                  también que, en caso de prestación de servicios, éstos puedan
                  ser, total o parcialmente, subcontratados a otras personas o
                  empresas, que tendrán la consideración de Encargados del
                  Tratamiento, con los que se ha convenido el correspondiente
                  contrato de confidencialidad, o adherido a sus políticas de
                  privacidad, establecidas en sus respectivas páginas web. El
                  Usuario podrá negarse a la cesión de sus datos a los
                  Encargados del Tratamiento, mediante petición escrita, por
                  cualquiera de los medios anteriormente referenciados.
                </p>
                <p>
                  Además, en aquellos casos en que sea necesario, los datos de
                  Clientes podrán ser cedidos a determinados organismos, en
                  cumplimiento de una obligación legal: Agencia Tributaria
                  Española, entidades bancarias, Inspección de Trabajo, etc.
                </p>
                <h4>EJERCICIO DE DERECHOS DEL USUARIO</h4>
                <p>
                  La LOPD y el RGPD conceden a los interesados la posibilidad de
                  ejercer una serie de derechos relacionados con el tratamiento
                  de sus datos personales. Para ello, el Usuario deberá
                  dirigirse, aportando documentación que acredite su identidad
                  (DNI o pasaporte), mediante correo electrónico a
                  reservas@hostalestacion.es, o bien mediante comunicación
                  escrita a la dirección que aparece en nuestro Aviso Legal.
                  Dicha comunicación deberá reflejar la siguiente información:
                  nombre y apellidos del Usuario, la petición de solicitud, el
                  domicilio y los datos acreditativos.
                </p>
                <p>
                  El ejercicio de derechos deberá ser realizado por el propio
                  Usuario. No obstante, podrán ser ejecutados por una persona
                  autorizada como representante legal del Usuario, aportándose
                  la documentación que acredite dicha representación.
                </p>
                <p>
                  El Usuario podrá solicitar el ejercicio de los derechos
                  siguientes:
                </p>
                <ul>
                  <li>Derecho a solicitar el acceso a los datos personales.</li>
                  <li>
                    Derecho a solicitar su rectificación (en caso de que sean
                    incorrectos) o supresión.
                  </li>
                  <li>
                    Derecho a solicitar la limitación de su tratamiento, en cuyo
                    caso únicamente serán conservados por “Hostal Cafetería La
                    Estación” para el ejercicio o la defensa de reclamaciones.
                  </li>
                  <li>
                    Derecho a oponerse al tratamiento: “Hostal Cafetería La
                    Estación” dejará de tratar sus datos, salvo que por motivos
                    legítimos o el ejercicio o la defensa de posibles
                    reclamaciones se tengan que seguir tratando.
                  </li>
                  <li>
                    Derecho a la portabilidad de los datos: en caso de que
                    quiera que sus datos sean tratados por otra empresa, “Hostal
                    Cafetería La Estación”le facilitará la portabilidad de sus
                    datos en formato exportable.
                  </li>
                </ul>
                <p>
                  En el caso de que se haya otorgado el consentimiento para
                  alguna finalidad específica, el Usuariotiene derecho a retirar
                  el consentimiento en cualquier momento, sin que ello afecte a
                  la licitud del tratamiento basado en el consentimiento previo
                  a su retirada.
                </p>
                <p>
                  Si un Usuario considera que hay un problema con la forma en
                  que “Hostal Cafetería La Estación”está manejando sus datos,
                  puede dirigir sus reclamaciones al Responsable de Seguridad o
                  a la autoridad de protección de datos que corresponda, siendo
                  la Agencia Española de Protección de Datos la indicada en el
                  caso de España.
                </p>
                <h4>CONSERVACIÓN DE LOS DATOS</h4>
                <p>
                  Los datos de carácter personal de los Usuarios que usen el
                  formulario de contacto o que nos envíen un email solicitando
                  información serán tratados durante el tiempo estrictamente
                  necesario para atender a la solicitud de información, o hasta
                  que se revoque el consentimiento otorgado.
                </p>
                <p>
                  Los datos de carácter personal delos Clientesserán tratados
                  hasta que finalice la relación contractual. El período de
                  conservación de los datos personales será el mínimo necesario,
                  pudiendo mantenerse hasta:
                </p>
                <ul>
                  <li>
                    4 años: Ley sobre Infracciones y Sanciones en el Orden
                    Social (obligaciones en materia de afiliación, altas, bajas,
                    cotización, pago de salarios…); Arts. 66 y sig. Ley General
                    Tributaria (libros de contabilidad…)
                  </li>
                  <li>
                    5 años: Art. 1964 Código Civil (acciones personales sin
                    plazo especial)
                  </li>
                  <li>
                    6 años: Art. 30 Código de Comercio (libros de contabilidad,
                    facturas…)
                  </li>
                  <li>
                    10 años: Art. 25 Ley de Prevención del Blanqueo de Capitales
                    y Financiación del Terrorismo.
                  </li>
                  <li>Sin plazo: datos desagregados y anonimizados.</li>
                </ul>
                <p>
                  En el caso de tratamiento de datos de candidatos (C.V.),
                  “Hostal Cafetería La Estación” podrá mantener almacenado su
                  currículo un máximo de dos años para incorporarlo a futuras
                  convocatorias, a menos que el candidato se manifieste en
                  contrario.
                </p>
                <h4>REDES SOCIALES</h4>
                <p>
                  “Hostal Cafetería La Estación” cuenta con perfil en algunas
                  delas principales redes sociales de Internet (Facebook),
                  reconociéndose en todos los casos Responsable del tratamiento
                  de los datos de sus seguidores, fans, suscriptores,
                  comentaristas y otros perfiles de Usuarios (en adelante,
                  seguidores) publicados por “Hostal Cafetería La Estación”.
                </p>
                <p>
                  La finalidad del tratamiento de datos por parte de “Hostal
                  Cafetería La Estación”, cuando la ley no lo prohíba, será la
                  de informar a sus seguidores sobre sus actividades y ofertas,
                  por cualquier vía que la red social permita, así como prestar
                  servicio personalizado de atención al cliente.La base jurídica
                  que legitima este tratamiento será el consentimiento del
                  interesado, que podrá revocar en cualquier momento.
                </p>
                <p>
                  En ningún caso “Hostal Cafetería La Estación” extraerá datos
                  de las redes sociales, a menos que se obtuviera puntual y
                  expresamente el consentimiento del Usuario para ello (por
                  ejemplo, para la realización de un concurso).
                </p>
                <h4>SELECCIÓN DE PERSONAL</h4>
                <p>
                  El aspirante que envíe comunicaciones electrónicas a “Hostal
                  Cafetería La Estación”, con la finalidad de acceder a los
                  procesos de selección de personal del responsable, nos
                  autoriza a analizar: los documentos remitidos (por ejemplo, el
                  C.V.), todo el contenido que sea directamente accesible a
                  través de buscadores de Internet (por ejemplo, Google), los
                  perfiles que mantenga en redes sociales profesionales (por
                  ejemplo, LinkedIn), los datos obtenidos en las pruebas de
                  acceso, y la información que revele en la entrevista de
                  trabajo; con el objetivo de valorar su candidatura y poder, en
                  su caso, ofrecerle un puesto de trabajo. En caso de que el
                  candidato no sea seleccionado, “Hostal Cafetería La Estación”
                  podrá mantener almacenado su C.V. durante un máximo de dos
                  años, para incorporarlo a futuras convocatorias, a menos que
                  el candidato manifieste lo contrario. La base jurídica que
                  legitima este tratamiento será el consentimiento del
                  interesado, que podrá revocar en cualquier momento.
                </p>
                <h4>CONFIDENCIALIDAD</h4>
                <p>
                  La información suministrada por el cliente tendrá, en todo
                  caso, la consideración de confidencial, sin que pueda ser
                  utilizada para otros fines distintos a los aquí descritos.
                  “Hostal Cafetería La Estación” se obliga a no divulgar ni
                  revelar información sobre las pretensiones del Usuario, los
                  motivos del asesoramiento solicitado, o la duración de su
                  relación con éste.
                </p>
                <h4>VALIDEZ</h4>
                <p>
                  Esta política de privacidad y de protección de datos ha sido
                  redactada por ExpertosLOPD®,empresa de protección de datos,a
                  día 19 de enero de 2020, y podrá variar en función de los
                  cambios de normativa y jurisprudencia que se vayan
                  produciendo, siendo responsabilidad del titular de los datos
                  la lectura del documento actualizado, en orden a conocer sus
                  derechos y obligaciones al respecto en cada momento. 
                </p>
                <p>E-mail: reservas@hostalestacion.es</p>
              </ContentTextCookies>
              <div className="buttonPosition">
                <button
                  onClick={() => {
                    setAcceptCookie(false)
                  }}
                >
                  Acepta
                </button>
              </div>
            </div>
          </div>
        </div>
      </CookiesDiv>
    </CSSTransition>
  )
}
export default Cookie
