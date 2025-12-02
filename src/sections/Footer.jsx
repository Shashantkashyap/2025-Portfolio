import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
     <a
  href="https://drive.google.com/file/d/1frK76JhbSKwX6dH0BsgOjsrY765d3uK2/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  class="px-6 py-3  text-white  rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200"
>
  My Professional Lore 📜
</a>

      <p>© 2025 Shashant. All rights reserved.</p>
    </section>
  );
};

export default Footer;