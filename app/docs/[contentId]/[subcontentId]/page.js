import ContentDisplay from "@/components/ContentDisplay"


const SubContentPage = ({params: {subcontentId}}) => {
  return (
    <div>
        <ContentDisplay id={subcontentId}/>
    </div>
  )
}

export default SubContentPage