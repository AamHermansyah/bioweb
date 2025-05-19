interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return (
    <p className="text-gray-700 leading-relaxed">
      {children}
    </p>
  );
};

export default Paragraph;
