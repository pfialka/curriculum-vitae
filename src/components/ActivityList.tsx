import type { CvActivityItem } from '../data/cv';

type Props = { items: CvActivityItem[] };

export function ActivityList({ items }: Props) {
  return (
    <ul className="cv-activities">
      {items.map((item, index) => (
        <li key={typeof item === 'string' ? item : `${item.href}-${index}`}>
          {typeof item === 'string' ? (
            item
          ) : (
            <>
              {item.before}
              <a href={item.href} target="_blank" rel="noreferrer noopener">
                {item.linkLabel}
              </a>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
