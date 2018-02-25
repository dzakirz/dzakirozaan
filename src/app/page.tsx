import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Github, Globe, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Hi, I&apos;m Dzaki
              <span className="ml-2 inline-block animate-wave">👋</span>
            </h1>
            <p className="text-xl text-muted-foreground">Fullstack Developer</p>
          </div>
          {/* <div className="shrink-0">
            <Image
              src="/profile.png"
              alt="Profile picture"
              width={80}
              height={80}
              className="rounded-full"
              priority
            />
          </div> */}
        </section>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-muted-foreground">
            I&apos;m a fullstack developer based in Indonesia. I love building
            things that make people happy and help them solve their problems.
            I&apos;m passionate about web technologies and always eager to learn
            new things.
          </p>
        </section>

        {/* Blog Section */}
        <section className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <Badge className="rounded-full px-4 py-1">Blog</Badge>
          </div>
          <h2 className="text-4xl font-bold text-center mb-2">
            Check out my latest blog posts
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            I write about my experiences, thoughts, and things I learn
          </p>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <Badge className="rounded-full px-4 py-1">
              My Personal Projects
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-center mb-2">
            Check out my latest personal work
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            I build things that make me happy and help me learn new things
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="p-0">
                {/* <Image
                  src="/project-2.png"
                  alt="Project screenshot"
                  width={600}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-48"
                /> */}
              </CardHeader>
              <CardContent className="px-4">
                <h3 className="font-bold text-lg mb-1">Portfolio Website</h3>
                <p className="text-sm text-muted-foreground mb-2">March 2024</p>
                <p className="text-sm text-muted-foreground mb-4">
                  A personal portfolio website built with Next.js and shadcn/ui
                  to showcase my projects and skills.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">shadcn/ui</Badge>
                </div>
              </CardContent>
              <CardFooter className="px-4 pt-0 flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <Globe className="h-4 w-4" />
                  Website
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center"
                >
                  <Github className="h-4 w-4" />
                  Source
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <Badge className="rounded-full px-4 py-1">Contact</Badge>
          </div>
          <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
          <p className="text-center text-muted-foreground mb-8">
            Want to chat? Just shoot me a dm
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="icon"
              variant="outline"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}
