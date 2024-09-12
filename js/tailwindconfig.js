tailwind.config = {
   prefix: 'tw-',
   corePlugins: {
      preflight: false,
   },
   theme: {
      screens: {
         sm: '576px',
         md: '768px',
         lg: '992px',
         lx: '1999px',
         xl: '1200px',
         '2xl': '1400px',
      },
      extend: {
         // You can add more theme extensions here
      },
   },
}
