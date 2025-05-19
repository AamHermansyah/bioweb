import Heading from '@/components/heading'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi16() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Gangguan Persendian dan Peradangan</Heading>
      <Paragraph>
        Apabila kita mengalami gangguan persendian, gerakan tulang menjadi tidak leluasa atau maksimal. Selain itu, gangguan ini juga menimbulkan rasa nyeri. Gangguan yang dimaksud meliputi.
      </Paragraph>
      <ul className="space-y-4">
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">1</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Dislokasi</h4>
            <p>
              Dislokasi merupakan gangguan persendian akibat sendi bergeser dari posisi semula. Penyebabnya, ligamen yakni jaringan ikat pada ujung tulang yang membentuk sendi sobek atau tertarik.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">2</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Terkilir atau Keseleo</h4>
            <p>
              Penyebab terkilir atau keseleo adalah gerakan yang mendadak dan jenis gerakannya memang tidak biasa dilakukan. Akibatnya, liga- men pada persendian tersebut tertarik, namun tidak menyebab- kan bergesernya sendi. Pada daerah yang terkilir, biasanya bengkak dan penderita akan merasakan sakit yang cukup hebat.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">3</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Ankilosis</h4>
            <p>
              Ankilosis merupakan gangguan yang menjadikan persendian ti- dak dapat digerakkan sama sekali.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">4</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Artritis</h4>
            <p>
              Artritis terjadi sebab sendi mengalami peradangan. Akibatnya, rasa nyeri dan sakit dirasakan oleh penderita. Gangguan artritis dikelompokkan menjadi:
            </p>
            <ol className="list-disc list-outside pl-4 space-y-2 mt-2">
              <li>
                <span className="font-semibold">Osteoartritis</span>, yakni artritis yang terjadi karena adanya peni- pisan kartilago pada persendian, sehingga mengganggu pergerakan sendi.
              </li>
              <li>
                <span className="font-semibold">Goutartritis</span>, yaitu artritis yang disebabkan oleh kegagalan metabolisme asam urat. Akibatnya, terjadilah penumpukan asam urat di daerah sendi, sehingga sendi menjadi bengkak. Gangguan ini kerapkali terjadi pada ruas-ruas jari.
              </li>
              <li>
                <span className="font-semibold">Reumatoid</span>, ialah pengapuran atau peradangan yang terjadi pada persendian. Tepatnya pada jaringan penghubung sendi yaitu kartilago. Karena itu, sendi yang mengalaminya bisa sulit digerakkan.
              </li>
            </ol>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Materi16