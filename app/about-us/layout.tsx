export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {/* about-us의 폴더에 존재하는 page.tsx가 {children}에 적용 */}
            {children}
            {/* about-us에 존재하는 모든 page.tsx에 Next JS is great가 적용 */}
            &copy; Next JS is great
        </div>
    );
}
