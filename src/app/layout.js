import localFont from "next/font/local";
import "./globals.css";

const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Black.ttf",
      weight: '300',
      style : 'normal'
    },
    {
      path: "./fonts/Gilroy-BlackItalic.ttf",
      weight:'300',
      style : 'italic'
    },
    {
      path: "./fonts/Gilroy-Bold.ttf",
      weight:'200',
      style : 'normal'
    },
    {
      path: "./fonts/Gilroy-BoldItalic.ttf",
      weight:'200',
      style : 'italic'
    },
    {
      path: "./fonts/Gilroy-ExtraBold.ttf",
      weight:'400',
      style : 'normal'
    },
    {
      path: "./fonts/Gilroy-ExtraBoldItalic.ttf",
      weight:'400',
      style : 'italic'
    },
    {
      path: "./fonts/Gilroy-Heavy.ttf",
      weight : '700',
      style : 'normal'
    },
    {
      path: "./fonts/Gilroy-HeavyItalic.ttf",
      weight:'700',
      style : 'italic'
    },
    {
      path: "./fonts/Gilroy-Light.ttf",
      weight:'100',
      style : 'normal'
    },
    {
      path: "./fonts/Gilroy-LightItalic.ttf",
      weight: '100',
      style : 'italic'
    },
    {
      path: "./fonts/Gilroy-Medium.ttf",
      weight: '500',
      style : 'normal'
    },
    {
      path: "./fonts/Gilroy-MediumItalic.ttf",
      weight: '500',
      style : 'italic'
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "Rajat Vaidhya - Full Stack Developer | Jabalpur Engineering College",
  description: "Enthusiastic full-stack developer with 2+ years of experience architecting and developing cutting-edge web applications using MERN Stack technologies. Thrives in tackling intricate challenges through competitive programming in C++. Passionate about collaborating with like-minded individuals to build robust and scalable web solutions that positively impact the user experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gilroy.className}>{children}</body>
    </html>
  );
}
