# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

day 1(14/05/25) :learnt about components in react 
->leant how props are reused 

->learnt about states and hooks
  const [hasliked, sethasliked]= useState(false);//initia
lcondition
  const [count,setcount] = useState(0);
->learnt about useEffect
   useEffect(() => {
    console.log(`${title} has been liked:${hasliked}`);
  }, [hasliked]);
<img width="1440" alt="Screenshot 2025-05-14 at 11 09 13 PM" src="https://github.com/user-attachments/assets/074445d9-6753-48eb-bcd3-a2c921b8d7af" />
