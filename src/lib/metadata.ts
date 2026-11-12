// Only title and description change per route. Link previews are read from
// index.html because social crawlers do not run JavaScript.
const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: "Resign Je, Malaysia's #1 resignation encouragement platform",
    description: 'Real Malaysian developers ranked by how many times they resigned. Punch the clock and find out if you should resign too.',
  },
  '/hall-of-fame': {
    title: 'The Rack: Hall of Fame | Resign Je',
    description: 'Malaysian developers yang dah resign, one time card each, one red stamp per resignation.',
  },
  '/awards': {
    title: 'Awards | Resign Je',
    description: 'The chops that get stamped on a card when someone resigns with style.',
  },
  '/should-i-resign': {
    title: 'Should I Resign Ah? | Resign Je',
    description: 'Punch the clock. Every no makes the next yes more likely, same like real life.',
  },
  '/settings': {
    title: 'Settings | Resign Je',
    description: 'Customize your liberation experience.',
  },
};

export const updateMetadata = (path: string) => {
  const metadata = pageMetadata[path] || pageMetadata['/'];
  document.title = metadata.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
};
