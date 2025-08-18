type PublicationItemProps = {
  authors: string[]; // なるべくjsonをシンプルにしたいので単に文字列の配列とし下線や特殊文字はパターンマッチで処理する
  title: string;
  journal: {
    name: string;
    volume?: number;
    issue?: number;
    pag?: string;
  };
  doi?: string;
  year: number;
  additional?: string;
};

const piName = ["Takahara,K.", "高原和彦"]; // 空白を除去して比較するからスペースは含めない

export default function PublicationItem({
  authors,
  title,
  journal,
  doi,
  year,
  additional,
}: PublicationItemProps) {
  return (
    <div className="py-[20px] border-separator-secondary border-b-[1px] text-label-secondary text-[16px] leading-[24px]">
      {
        // 似たような処理が何箇所か出てくるが微妙に要請が違って面倒なので共通化はしない
        authors.map((author, i) => {
          const match = author.match(/([†*‡]+)$/);

          if (match) {
            const name = author.slice(0, -match[0].length);
            const symbols = match[0];
            return (
              <>
                {piName.includes(name.replace(/\s+/g, "")) ? (
                  <strong className="underline">{name}</strong>
                ) : (
                  name
                )}
                <sup>{symbols}</sup>
                {i !== authors.length - 1
                  ? ", "
                  : name.endsWith(".")
                  ? " "
                  : ". "}
              </>
            );
          }

          return piName.includes(author.replace(/\s+/g, "")) ? (
            <>
              <strong className="underline">{author}</strong>
              {i !== authors.length - 1
                ? ", "
                : author.endsWith(".")
                ? " "
                : ". "}
            </>
          ) : (
            author +
              (i !== authors.length - 1
                ? ", "
                : author.endsWith(".")
                ? " "
                : ". ")
          );
        })
      }
      {title + (title.endsWith(".") ? " " : ". ")}
      <em className="font-bold">
        {journal.name + (journal.name.endsWith(".") ? "" : ".")}
      </em>
      {doi ? (
        ` DOI: ${doi}`
      ) : (
        <>
          {journal.volume && ` ${journal.volume}`}
          {journal.issue && `(${journal.issue})`}
          {journal.pag && `, ${journal.pag}`}
        </>
      )}
      {` (${year})`}
      {additional && " "}
      {additional && convertToSup(additional)}
    </div>
  );
}

const convertToSup = (text: string) => {
  const regex = /[†*‡]/g;
  const matches = text.match(regex);

  if (!matches) {
    return <>{text}</>;
  }

  const parts = text
    .split(regex)
    .reduce<(string | React.JSX.Element)[]>((acc, part, index, array) => {
      if (index < array.length - 1) {
        return [...acc, part, <sup key={index}>{matches[index]}</sup>];
      }
      return [...acc, part];
    }, []);

  return <>{parts}</>;
};
