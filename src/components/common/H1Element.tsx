type H1ElementProp = {
  title: string;
};

export default function H1Element({ title }: H1ElementProp) {
  return <h1 className="text-slate-900 text-2xl font-extrabold">{title}</h1>;
}
