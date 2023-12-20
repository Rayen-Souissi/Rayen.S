import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Remplacez l'URL par l'endpoint de votre API
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données depuis l\'API :', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Liste d'éléments depuis l'API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};


export default App;
