import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  // WhatsApp link for Morocco number 0710257807 → +212710257807
  const whatsappNumber = '212710257807';
  const whatsappMessage = encodeURIComponent("Bonjour Kawthar, je vous contacte via votre portfolio.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const contactItems = [
    {
      href: 'tel:0710257807',
      icon: <Phone size={28} strokeWidth={1.5} />,
      label: 'Téléphone',
      value: '0710257807',
      color: 'pink',
      isExternal: false
    },
    {
      href: whatsappLink,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      label: 'WhatsApp',
      value: 'Envoyer un message',
      color: 'green',
      isExternal: true
    },
    {
      href: 'mailto:kawtarbkm7@gmail.com',
      icon: <Mail size={28} strokeWidth={1.5} />,
      label: 'Email',
      value: 'kawtarbkm7@gmail.com',
      color: 'purple',
      isExternal: false
    },
    {
      href: null,
      icon: <MapPin size={28} strokeWidth={1.5} />,
      label: 'Localisation',
      value: 'Agadir, Maroc',
      color: 'pink',
      isExternal: false
    }
  ];

  const colorMap = {
    pink:   { bg: 'bg-pink-100',   icon: 'text-pink-500',   hover: 'group-hover:bg-pink-500' },
    purple: { bg: 'bg-purple-100', icon: 'text-purple-500', hover: 'group-hover:bg-purple-500' },
    green:  { bg: 'bg-green-100',  icon: 'text-green-500',  hover: 'group-hover:bg-green-500' }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-pink-500 font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs">Restons en contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Me Contacter</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-xl mx-auto text-lg font-light">
            Vous recherchez une enseignante sérieuse et passionnée ? 
            N'hésitez pas à me contacter via l'un de ces canaux.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {contactItems.map((item, index) => {
            const colors = colorMap[item.color] || colorMap.pink;
            const Wrapper = item.href ? motion.a : motion.div;
            const wrapperProps = item.href 
              ? { href: item.href, target: item.isExternal ? '_blank' : undefined, rel: item.isExternal ? 'noreferrer noopener' : undefined }
              : {};

            return (
              <Wrapper
                key={index}
                {...wrapperProps}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card flex items-center gap-6 p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer"
              >
                <div className={`flex-shrink-0 w-16 h-16 ${colors.bg} ${colors.hover} rounded-2xl flex items-center justify-center ${colors.icon} group-hover:text-white transition-all`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">{item.label}</h3>
                  <p className="text-slate-600 font-medium">{item.value}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
