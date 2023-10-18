import Link from "next/link";
import Image from "next/image";

export default function Camisa() {
  return (
    <div>
        <h1>Camisa</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi animi commodi rem? Expedita dicta saepe doloremque aperiam dolor ab molestiae quos, quam sint omnis reiciendis fugit numquam? Quibusdam, natus reprehenderit.</p>
        <figure>
            <Image 
                src="https://www.colorironline.com/images/imgcolor/desenho-camiseta-14-para-colorir.jpg"
                alt="Camisa"
                height={300}
                width={300}
                />
        </figure>
        <p><Link href="/">Voltar</Link></p>
    </div>
  )
}
