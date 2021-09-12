import portfolio from '../assets/portfolio.png';
import cybersec from '../assets/cybersec.jpeg';
import mnist from '../assets/mnist.png';
import rnn from '../assets/rnn.png';
import todo from '../assets/todo.png';

export const projects = [
    {
      title: "Portfolio Website",
      subtitle: "ReactJS, TailwindCSS",
      description:
        "My personal website (the one you're on!) for displaying my projects and qualifications.",
      image: portfolio,
      link: "https://github.com/josephxu1234/portfolio",
    },
    {
      title: "RNN Sentiment Analysis",
      subtitle: "Python, Numpy",
      description:
        "Personal project to learn the math behind RNN feedforward/backprop. Implemented all in numpy.",
      image: rnn,
      link: "https://github.com/josephxu1234/recurrent-neural-network-sentiment-analysis",
    },
    {
      title: "Handwritten Digit Recognition",
      subtitle: "Python, Keras",
      description:
        "Personal project for practicing using Keras on MNIST database. Trains a neural net to recognize handwritten digits.",
      image: mnist,
      link: "https://github.com/josephxu1234/handwritten-digits-keras-classifier",
    },
    {
        title: "Cybersecurity Scoring Engine",
        subtitle: "Python, bash",
        description:
          "Educational tool to help students learn how to fix cybersecurity vulnerabilities. Gives points for each vuln fixed.",
        image: cybersec,
        link: "https://github.com/josephxu1234/cybersec-educational-tools",
      },
      {
        title: "Todo App",
        subtitle: "ReactJS, Bootstrap CSS",
        description:
          "Frontend for Todo Application.",
        image: todo,
        link: "https://github.com/josephxu1234/todo-app",
      }

  ];