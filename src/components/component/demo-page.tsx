/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/qdTrIEOQkoj
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Rethink_Sans } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

rethink_sans({
  subsets: ['latin'],
  display: 'swap',
})

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export function demoPage() {
  return (
    <div className="bg-gray-950 text-gray-50">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Email Scraper</h1>
        <div className="flex items-center gap-4">
          <Link className="text-sm hover:underline" href="#">
            Docs
          </Link>
          <Link className="text-sm hover:underline" href="#">
            Settings
          </Link>
          <Avatar className="h-8 w-8">
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="container mx-auto py-8 px-4 md:px-6">
        <form className="bg-gray-900 rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="file">Upload CSV</Label>
              <Input id="file" type="file" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="job-name">Job Name</Label>
              <Input id="job-name" placeholder="Enter job name" type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="task-count">Task Count</Label>
              <Input id="task-count" placeholder="Enter task count" type="number" />
            </div>
          </div>
          <Button className="w-full" type="submit">
            Create Job
          </Button>
        </form>
        <div className="mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Task Count</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Email Count</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Job 1</TableCell>
                <TableCell>Completed</TableCell>
                <TableCell>100</TableCell>
                <TableCell>
                  <Progress value={100} />
                </TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>1,000</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveVerticalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                      <DropdownMenuItem>Check Progress</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem>Result Download</DropdownMenuItem>
                      <DropdownMenuItem>Output Download</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Job 2</TableCell>
                <TableCell>In Progress</TableCell>
                <TableCell>50</TableCell>
                <TableCell>
                  <Progress value={50} />
                </TableCell>
                <TableCell>$150.00</TableCell>
                <TableCell>500</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveVerticalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                      <DropdownMenuItem>Check Progress</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem>Result Download</DropdownMenuItem>
                      <DropdownMenuItem>Output Download</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Job 3</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>75</TableCell>
                <TableCell>
                  <Progress value={25} />
                </TableCell>
                <TableCell>$350.00</TableCell>
                <TableCell>750</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveVerticalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                      <DropdownMenuItem>Check Progress</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem>Result Download</DropdownMenuItem>
                      <DropdownMenuItem>Output Download</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

function MoveVerticalIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="8 18 12 22 16 18" />
      <polyline points="8 6 12 2 16 6" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  )
}
