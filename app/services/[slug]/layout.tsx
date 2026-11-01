
interface ServicesPageLayout {
    children: React.ReactNode;
}

export default function ServicesPageLayout({
    children,
}: ServicesPageLayout) {
    return <main>{children}</main>;
}
